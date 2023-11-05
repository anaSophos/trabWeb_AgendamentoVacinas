import swaggerAutogen from 'swagger-autogen'

const swaggerautogen = swaggerAutogen()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/routes.js']

swaggerautogen(outputFile, endpointsFiles)