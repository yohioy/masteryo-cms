
export function getAllPostIds() {

    //Returns an array that looks like this:
    return [
      {
        params: {
          id: '1'
        }
      },
      {
        params: {
          id: '2'
        }
      }
    ];

    /*return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })*/
}