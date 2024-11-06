// Nomenclatura de variáveis

const listOfCategoriesByFollowers = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getUserCategoryByFollowersOnGithub(req, res) {
  const username = String(req.query.username)

  if (!username) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const userInformationFromGithub = await fetch(`https://api.github.com/users/${username}`);

  if (userInformationFromGithub.status === 404) {
    return res.status(400).json({
      message: `User with username "${username}" not found`
    })
  }

  const user = await userInformationFromGithub.json()

  const listOfCategoriesOrderedByFollowers = listOfCategoriesByFollowers
  .sort((categoryA, categoryB) =>  categoryB.followers - categoryA.followers); 

  const userCategory = listOfCategoriesOrderedByFollowers
    .find(categoryByFollowers => user.followers > categoryByFollowers.followers)

  const userCategoryByFollowers = {
    username,
    category: userCategory?.title
  }

  return userCategoryByFollowers
}

getUserCategoryByFollowersOnGithub({ query: {
  username: 'jessicacastro'
}}, {})