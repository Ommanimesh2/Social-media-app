
import intersect from "../../utils/commonInArr";
export function getIntersectingPosts(userData,allPosts,thisArr){
     for(let i=0;i<allPosts.length;i++){
          if(intersect(userData.intersets,allPosts[i].genres).length>=2){
            console.log(allPosts[i])
            thisArr.push(allPosts[i])
          }
          else{
            console.log("nothing to show");
          }
        }
}