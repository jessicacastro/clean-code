// Essa função tem o objetivo de registrar um novo usuário no banco.
async function registerNewUser({data}) {

  const { email, name, avatar } = data

  if (!avatar) return { error: 'avatar is required' }

  if(!name) return { error: 'name is required' }

  const doesEmailExistsInDatabase = getEmailFromDatabase(email)

  if (doesEmailExistsInDatabase) {
    return { error: 'email already used' }
  }

  // Essa função realiza a conversão das imagens para JPG a fim de evitar erros de incompatibilidade.
  // Mais informações na issue https://github.com/rocketseat-education/example-repository/issues/1
  const avatarInJpg = convertImageToJPG(avatar)

  const user = await createUser({ email, name, avatar: avatarInJpg })

  return { user }
}