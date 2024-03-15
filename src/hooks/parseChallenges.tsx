
function parseChallenges(data : any) {

    // group challenges by genre
    // data.forEach((challenge : any) => {
    //   challenge.files = challenges['files'].split(",")
    // });
    if(data == undefined) return [];
    // if data of type object, convert to array
    if (data && typeof data === 'object' && data.constructor === Object) {
      return []
    }


    const challenges : any = {};

    data.forEach((challenge : any) => {
      if(challenge.visibility === 0) return;
      if (challenges[challenge.category_name]) {
        challenges[challenge.category_name].push(challenge);
      } else {
        challenges[challenge.category_name] = [challenge];
      }
    });
    // 
    return challenges;

}

function get_all_categories(data : any) {
    const categories = new Set();

    data.forEach((challenge : any) => {
        categories.add(challenge.category_name)
    })

    return Array.from(categories)
}

function get_all_tags(data : any) {
    const tags = new Set();

    data.forEach((challenge : any) => {
        tags.add(challenge.event_name)
    })

    return Array.from(tags)

}


export {
    parseChallenges,
    get_all_categories,
    get_all_tags
}