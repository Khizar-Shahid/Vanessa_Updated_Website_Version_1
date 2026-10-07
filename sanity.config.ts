import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemaTypes/index'

export default defineConfig({
  name: 'default',
  title: 'Thrive With Therapy',
  projectId: '9f23hovx',
  dataset: 'production',
  basePath: '/studio',

  plugins: [structureTool(), visionTool()],

  tools: (prev, {currentUser}) => {
    // Check if the current user has the 'administrator' role
    const isAdmin = currentUser?.roles.some((role) => role.name === 'administrator')
    
    // If admin, show all tools (Structure + Vision). If not, filter out Vision.
    return isAdmin ? prev : prev.filter((tool) => tool.name !== 'vision')
  },

  schema: {
    types: schemaTypes,
  },
})
