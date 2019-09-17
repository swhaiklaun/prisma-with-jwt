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

  let roleSupplier = await prisma.createRole({
    name: 'Supplier'
  })

  let roleCustomer = await prisma.createRole({
    name: 'Customer'
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
    },
    posts: {
      create: {
        title: 'First post from developer',
        content: 'https://www.prisma.io/day/',
        published: true
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
    },
    posts: {
      create: {
        title: 'First post from SuperAdmin',
        content: '...',
        published: true
      }
    }
  })

  // Supplier
  await prisma.createSupplier({
    name: 'Supplier Test',
    user: {
      create: {
        email: 'supplier@agilitet.com',
        name: 'Supplier',
        password: '$2b$10$o6KioO.taArzboM44Ig85O3ZFZYZpR3XD7mI8T29eP4znU/.xyJbW', // "secret43",
        status: 'Active',
        role: {
          connect: {
            id: roleSupplier.id
          }
        }
      }
    }
  })

  // Customer
  await prisma.createCustomer({
    organizationName: 'Customer-JuristicPerson',
    firstName: '-',
    lastName: '-',
    customerType: 'JuristicPerson',
    user: {
      create: {
        email: 'customer1@agilitet.com',
        name: 'Customer-JuristicPersonOrdinaryPerson',
        password: '$2b$10$o6KioO.taArzboM44Ig85O3ZFZYZpR3XD7mI8T29eP4znU/.xyJbW', // "secret43",
        status: 'Active',
        role: {
          connect: {
            id: roleCustomer.id
          }
        }
      }
    }
  })

  await prisma.createCustomer({
    organizationName: '-',
    firstName: 'Customer',
    lastName: 'OrdinaryPerson',
    customerType: 'OrdinaryPerson',
    user: {
      create: {
        email: 'customer2@agilitet.com',
        name: 'Customer-OrdinaryPerson',
        password: '$2b$10$o6KioO.taArzboM44Ig85O3ZFZYZpR3XD7mI8T29eP4znU/.xyJbW', // "secret43",
        status: 'Active',
        role: {
          connect: {
            id: roleCustomer.id
          }
        }
      }
    }
  })
}

main().catch(e => console.error(e))
