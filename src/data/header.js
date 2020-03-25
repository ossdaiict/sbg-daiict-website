import React from 'react'
import {
  FaBook,
  FaCalendar,
  FaCameraRetro,
  FaClock,
  FaCogs,
  FaHome,
  FaTachometerAlt,
  FaTrophy,
  FaUsers,
} from 'react-icons/fa'

export const menuItems = [
  { title: 'Home', to: '/', icon: <FaHome /> },
  { title: 'SBG Core Team', to: '/sbgTeam', icon: <FaUsers /> },
  { title: 'SBG Constitution', to: '/constitution', icon: <FaBook /> },
  { title: 'Committees', to: '/committees', icon: <FaTachometerAlt /> },
  { title: 'Clubs', to: '/clubs', icon: <FaCogs /> },
  { title: 'Minutes of Meetings', to: '/minutes', icon: <FaClock /> },
  { title: 'Achievements', to: '/achievements', icon: <FaTrophy /> },
  { title: 'DA-Gallery', to: '/gallery', icon: <FaCameraRetro /> },
]

export const brandInfo = {
  title: 'Student Body Government, DA-IICT',
  logo: '/logo.png',
}

export const altSite = {
  link: 'http://sbggovernment.in',
}
