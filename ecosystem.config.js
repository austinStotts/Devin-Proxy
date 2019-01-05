module.exports = {
  apps: [{
    name: 'proxy',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-188-20-60.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/frontend.pem',
      ref: 'origin/master',
      repo: 'git@github.com:DevinKrok/Devin-Proxy.git',
      path: '/home/ubuntu/frontendCapstoneProxy',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}

