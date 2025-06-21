import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import ora from "ora";
import { execSync } from "child_process";
import { prompt } from "inquirer";

export interface CreateProjectOptions {
  skipInstall?: boolean;
  skipGit?: boolean;
  animation?: boolean;
  carousel?: boolean;
  smoothScroll?: boolean;
  all?: boolean;
}

export async function createProject(
  projectName: string,
  options: CreateProjectOptions
): Promise<void> {
  const targetPath = path.resolve(process.cwd(), projectName);
  const templatePath = path.resolve(__dirname, "../template");

  // Interactive feature selection if not provided via CLI
  const features = await selectFeatures(options);

  // Copy template
  const copySpinner = ora("Creating project files...").start();
  try {
    await fs.copy(templatePath, targetPath);
    copySpinner.succeed("Project files created");
  } catch (error) {
    copySpinner.fail("Failed to create project files");
    throw error;
  }

  // Update package.json with project name
  await updatePackageJson(targetPath, projectName, features);

  // Install dependencies
  if (!options.skipInstall) {
    await installDependencies(targetPath);
  }

  // Initialize git
  if (!options.skipGit) {
    await initializeGit(targetPath);
  }

  // Create .env.example if needed
  await createEnvExample(targetPath);
}

async function selectFeatures(options: CreateProjectOptions) {
  if (options.all) {
    return {
      animation: true,
      carousel: true,
      smoothScroll: true,
    };
  }

  // If any specific options provided, use them
  if (options.animation || options.carousel || options.smoothScroll) {
    return {
      animation: options.animation || false,
      carousel: options.carousel || false,
      smoothScroll: options.smoothScroll || false,
    };
  }

  // Interactive selection
  const response = await prompt({
    type: "checkbox",
    name: "features",
    message: "Which features would you like to include?",
    choices: [
      {
        name: "Framer Motion (animations)",
        value: "animation",
        checked: true,
      },
      {
        name: "Embla Carousel (touch carousels)",
        value: "carousel",
        checked: true,
      },
      {
        name: "Lenis (smooth scrolling)",
        value: "smoothScroll",
        checked: true,
      },
    ],
  });

  return {
    animation: response.features.includes("animation"),
    carousel: response.features.includes("carousel"),
    smoothScroll: response.features.includes("smoothScroll"),
  };
}

async function updatePackageJson(
  targetPath: string,
  projectName: string,
  features: { animation: boolean; carousel: boolean; smoothScroll: boolean }
) {
  const packageJsonPath = path.join(targetPath, "package.json");
  const packageJson = await fs.readJson(packageJsonPath);

  // Update name
  packageJson.name = projectName;

  // Remove optional dependencies if not selected
  if (!features.animation) {
    delete packageJson.dependencies["framer-motion"];
  }
  if (!features.carousel) {
    delete packageJson.dependencies["embla-carousel-react"];
  }
  if (!features.smoothScroll) {
    delete packageJson.dependencies["@studio-freight/lenis"];
  }

  await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
}

async function installDependencies(targetPath: string) {
  const installSpinner = ora("Installing dependencies...").start();

  try {
    process.chdir(targetPath);
    execSync("npm install", { stdio: "pipe" });
    installSpinner.succeed("Dependencies installed");
  } catch {
    installSpinner.fail("Failed to install dependencies");
    console.log(chalk.yellow("You can install them manually with: npm install"));
  }
}

async function initializeGit(targetPath: string) {
  const gitSpinner = ora("Initializing git repository...").start();

  try {
    process.chdir(targetPath);
    execSync("git init", { stdio: "pipe" });
    execSync("git add .", { stdio: "pipe" });
    execSync('git commit -m "Initial commit from create-next-tailwind-pro"', {
      stdio: "pipe",
    });
    gitSpinner.succeed("Git repository initialized");
  } catch {
    gitSpinner.fail("Failed to initialize git repository");
    console.log(chalk.yellow("You can initialize git manually with: git init"));
  }
}

async function createEnvExample(targetPath: string) {
  const envExamplePath = path.join(targetPath, ".env.example");

  if (!fs.existsSync(envExamplePath)) {
    const envContent = `# Environment Variables
# Copy this file to .env.local and fill in your values

# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000

# API Configuration
# NEXT_PUBLIC_API_URL=https://api.example.com

# Optional: External Services
# NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
# NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
`;

    await fs.writeFile(envExamplePath, envContent);
  }
}
