// React is installed in the studio and should be treated as a peer dependency
import React from 'react'

// We recommend using SVGs as they have both a small footprint and scale well
import logo from './logo.png'

const Logo = () => <img style={{maxWidth: "70px"}} src={logo} />

module.exports = Logo
