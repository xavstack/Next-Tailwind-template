import { Command } from "commander";
import chalk from "chalk";
import { createProject } from "./utils/createProject";
import { validateProjectName } from "./utils/validateProjectName";

const program = new Command();

// ASCII Art Banner
console.log(
  chalk.cyan(`
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║  ${chalk.bold("create-next-tailwind-pro")}                            ║
║                                                       ║
║  ${chalk.gray("Interactive CLI to create production-ready")}           ║
║  ${chalk.gray("Next.js apps with Tailwind CSS")}                       ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝
`)
);

program
  .name("create-next-tailwind-pro")
  .description("Create a new Next.js project with Tailwind CSS and TypeScript")
  .version("1.0.0")
  .argument("[project-name]", "Name of the project to create")
  .option("--skip-install", "Skip package installation")
  .option("--skip-git", "Skip git initialization")
  .option("--animation", "Include animation libraries (Framer Motion)")
  .option("--carousel", "Include carousel library (Embla Carousel)")
  .option("--smooth-scroll", "Include smooth scrolling (Lenis)")
  .option("--all", "Include all optional features")
  .action(async (projectName: string | undefined, options) => {
    try {
      // Validate project name
      const validatedName = await validateProjectName(projectName);

      // Create the project
      await createProject(validatedName, options);

      console.log(chalk.green("\n🎉 Project created successfully!"));
      console.log(chalk.gray(`\nNext steps:`));
      console.log(chalk.gray(`  cd ${validatedName}`));
      if (options.skipInstall) {
        console.log(chalk.gray(`  npm install`));
      }
      console.log(chalk.gray(`  npm run dev`));
      console.log(chalk.gray(`\nHappy coding! 🚀`));
    } catch (error) {
      console.error(
        chalk.red("Error:"),
        error instanceof Error ? error.message : "Unknown error occurred"
      );
      process.exit(1);
    }
  });

program.parse();
