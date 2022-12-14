const fs = require('fs-extra');

// Copy scss folder
fs.copy('src/lib/scss', 'dist/lib/scss', err => {
  if (err) throw err;
  console.log('\x1b[32m', '- Copying: src/lib/scss was copied to dist/lib/scss');
});

// Copy .sass-lint.yml file
fs.copyFile('.sass-lint.yml', 'dist/.sass-lint.yml', err => {
  if (err) throw err;
  console.log('\x1b[32m', '- Copying: .sass-lint.yml was copied to dist/.sass-lint.yml');
});

// Copy .gitignore file
fs.copyFile('.gitignore', 'dist/.gitignore', err => {
  if (err) throw err;
  console.log('\x1b[32m', '- Copying: .gitignore was copied to dist/.gitignore');
});

// Copy tsconfig.json file
fs.copyFile('tsconfig.json', 'dist/tsconfig.json', err => {
  if (err) throw err;
  console.log('\x1b[32m', '- Copying: tsconfig.json was copied to dist/tsconfig.json');
});

// Copy .eslintrc.json file
fs.readFile('.eslintrc.json', (_err, data) => {
  if (_err) throw _err;

  const output = data.toString().replace(/node_modules/g, '..');
  const file = fs.openSync('dist/.eslintrc.json', 'w');

  fs.writeFile(file, output, __err => {
    if (__err) throw __err;

    console.log('\x1b[32m', '- Copying: .eslintrc.json was copied to dist/.eslintrc.json');
    fs.close( file, () => {} );
  });
});
