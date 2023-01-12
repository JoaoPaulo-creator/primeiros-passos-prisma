import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    // gravando um dado
   /*  const user = await prisma.user.create({
        data: {
            name: 'Lucas',
            email: 'lucas@teste.com'
        }
      })

      return user
 */

    // consultando todos os dados cadastrados
    
    // criando um dado que possui relacionamento com outra tabela/model
    
    /* await prisma.user.create({
        data:{
            name: 'Joao Paulo',
            email: 'joao_paulo@teste.com',
            post: {
                create: {
                    title: 'Meu primeiro post'
                }
            }
        }
    }) */

    const users = await prisma.user.findMany()
    const userWithPost = await prisma.user.findMany({
        include: {
            post: true
        }
    })
    console.dir(userWithPost, { depth: null }) // retornando o usuario, o post e as infos vinculadas ao post

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
