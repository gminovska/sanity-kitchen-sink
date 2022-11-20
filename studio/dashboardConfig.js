export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '637a68c91645e061048bf46e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-c3umqqoa',
                  apiId: '837942b3-643c-410d-91a7-ee045dc9359a'
                },
                {
                  buildHookId: '637a68caea257065031536ff',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-sntesmj6',
                  apiId: '7b16d34d-28ef-4069-a64b-c473c410b5f8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gminovska/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-sntesmj6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
