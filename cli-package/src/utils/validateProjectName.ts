import { prompt } from "inquirer";
import validateNpmPackageName from "validate-npm-package-name";
import path from "path";
import fs from "fs-extra";
import chalk from "chalk";

export async function validateProjectName(projectName?: string): Promise<string> {
  let name = projectName;

  // If no name provided, prompt for it
  if (!name) {
    const response = await prompt({
      type: "input",
      name: "projectName",
      message: "What is your project named?",
      default: "my-next-app",
      validate: (input: string) => {
        const validation = validateNpmPackageName(input);
        if (!validation.validForNewPackages) {
          return `Invalid project name: ${validation.errors?.join(", ") || "Unknown error"}`;
        }
        return true;
      },
    });
    name = response.projectName;
  }

  // Validate the name
  const validation = validateNpmPackageName(name);
  if (!validation.validForNewPackages) {
    throw new Error(
      `Invalid project name "${name}": ${validation.errors?.join(", ") || "Unknown error"}`
    );
  }

  // Check if directory already exists
  const targetPath = path.resolve(process.cwd(), name);
  if (fs.existsSync(targetPath)) {
    const response = await prompt({
      type: "confirm",
      name: "overwrite",
      message: `Directory "${name}" already exists. Do you want to overwrite it?`,
      default: false,
    });

    if (!response.overwrite) {
      throw new Error("Operation cancelled");
    }

    console.log(chalk.yellow(`⚠️  Removing existing directory "${name}"`));
    fs.removeSync(targetPath);
  }

  return name;
}
