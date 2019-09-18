const { prisma } = require('../src/generated/prisma-client')

async function main() {
  addUsers().catch(e => console.error(e))
}

async function addUsers() {
  // Roles
  let roleDeveloper = await prisma.createRole({
    name: 'Developer'
  })

  let roleSuperAdmin = await prisma.createRole({
    name: 'SuperAdmin'
  })

  // Developer
  await prisma.createUser({
    email: 'sararit@agilitet.se',
    name: 'Tukky',
    password: '$2b$10$dqyYw5XovLjpmkYNiRDEWuwKaRAvLaG45fnXE5b3KTccKZcRPka2m', // "secret42"
    status: 'Active',
    role: {
      connect: {
        id: roleDeveloper.id
      }
    }
  })

  // SuperAdmin
  await prisma.createUser({
    email: 'superadmin@agilitet.com',
    name: 'SuperAdmin',
    password: '$2b$10$o6KioO.taArzboM44Ig85O3ZFZYZpR3XD7mI8T29eP4znU/.xyJbW', // "secret43",
    status: 'Active',
    role: {
      connect: {
        id: roleSuperAdmin.id
      }
    }
  })
}

main().catch(e => console.error(e))
