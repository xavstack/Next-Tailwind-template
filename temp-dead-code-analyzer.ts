import { Project } from "ts-morph";
import path from "path";

const project = new Project({
  tsConfigFilePath: "./tsconfig.json",
});

const sourceFiles = project.getSourceFiles();
const exportedSymbols = new Set<string>();
const importedSymbols = new Set<string>();
const unusedExports: { file: string; symbol: string; line: number }[] = [];

console.log("📊 Dead Code Analysis Report");
console.log("=".repeat(50));

// Collect all exports
sourceFiles.forEach(sourceFile => {
  const filePath = sourceFile.getFilePath();

  // Skip node_modules, dist, .next directories
  if (
    filePath.includes("node_modules") ||
    filePath.includes("dist") ||
    filePath.includes(".next") ||
    filePath.includes("__tests__")
  ) {
    return;
  }

  // Find exported declarations
  sourceFile.getExportedDeclarations().forEach((declarations, exportName) => {
    const key = `${filePath}:${exportName}`;
    exportedSymbols.add(key);

    declarations.forEach(declaration => {
      if (declaration.getSourceFile() === sourceFile) {
        unusedExports.push({
          file: path.relative(process.cwd(), filePath),
          symbol: exportName,
          line: declaration.getStartLineNumber(),
        });
      }
    });
  });

  // Find imports
  sourceFile.getImportDeclarations().forEach(importDecl => {
    const moduleSpecifier = importDecl.getModuleSpecifierValue();

    importDecl.getNamedImports().forEach(namedImport => {
      const importName = namedImport.getName();

      // Try to resolve the import
      const resolvedFile = sourceFile
        .getReferencedSourceFiles()
        .find(ref => ref.getFilePath().includes(moduleSpecifier));

      if (resolvedFile) {
        const key = `${resolvedFile.getFilePath()}:${importName}`;
        importedSymbols.add(key);
      }
    });
  });
});

// Find unused exports
const deadCode = unusedExports.filter(exp => {
  const key = `${path.resolve(exp.file)}:${exp.symbol}`;
  return !importedSymbols.has(key);
});

if (deadCode.length === 0) {
  console.log("✅ No dead code detected!");
} else {
  console.log(`⚠️  Found ${deadCode.length} potentially unused exports:\n`);

  deadCode.forEach(item => {
    console.log(`📄 ${item.file}:${item.line}`);
    console.log(`   📤 Unused export: ${item.symbol}`);
    console.log("");
  });

  console.log("💡 Note: This analysis may have false positives for:");
  console.log("   - Dynamic imports");
  console.log("   - Exports used in tests");
  console.log("   - Framework-specific exports (Next.js pages, etc.)");
}

console.log("\n" + "=".repeat(50));
