import fs from 'fs';

export default function copy(from, to) {
  return {
    name: 'copy', 
    writeBundle: () => {
      if (!from || !to) {
        console.warn('You must specify an origin/destination.');
        return;
      }

      fs.copyFile(from, to, (err) => {
        if (err) {
          console.error(`An unexpected error occured (${err}).`);
          return;
        }

        console.log('Copied files.');
      })
    }
  };
}