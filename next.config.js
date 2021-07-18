module.exports = {
  webpack: (config, options) => {
    // Important: return the modified config
    config.module.rules.push({
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
          }
        },
      ],
      type: 'javascript/auto'
    })
    return config
  },
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
    ]
  }
}
