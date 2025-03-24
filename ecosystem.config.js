module.exports = {
  apps: [
    {
      name: 'idohelper-staging',
      script: 'npm',
      args: 'start',
      env: {
        PORT: 3001,
        NODE_ENV: 'production'
      }
    }
  ]
}
