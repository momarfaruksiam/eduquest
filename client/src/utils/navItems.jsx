import {
    HiHome,
    HiUserGroup,
    HiAcademicCap,
    HiBuildingOffice2,
    HiVideoCamera,
    HiDocumentText,
    HiBookmark,
    HiChatBubbleLeftRight,
    HiBell,
    HiCalendarDays,
    HiChartBar,
    HiCog6Tooth,
} from 'react-icons/hi2'
import { FaSignOutAlt, FaSignInAlt } from 'react-icons/fa'


const navItems = [
    { link: '/', title: 'Home', icon: <HiHome /> },
    { link: '/courses', title: 'Courses', icon: <HiAcademicCap /> },
    { link: '/connections', title: 'Connections', icon: <HiUserGroup /> },
    { link: '/messages', title: 'Messages', icon: <HiChatBubbleLeftRight /> },
    { link: '/notifications', title: 'Notifications', icon: <HiBell /> },
    { link: '/institutions', title: 'Institutions', icon: <HiBuildingOffice2 /> },
    { link: '/live-class', title: 'Live Class', icon: <HiVideoCamera /> },
    { link: '/notes', title: 'Notes', icon: <HiDocumentText /> },
    { link: '/saved', title: 'Saved', icon: <HiBookmark /> },
    { link: '/schedule', title: 'Schedule', icon: <HiCalendarDays /> },
    { link: '/analytics', title: 'Analytics', icon: <HiChartBar /> },
    { link: '/settings', title: 'Settings', icon: <HiCog6Tooth /> },
    { link: '/saved', title: 'Saved', icon: <HiBookmark /> },
    { link: '/schedule', title: 'Schedule', icon: <HiCalendarDays /> },
    { link: '/analytics', title: 'Analytics', icon: <HiChartBar /> },
    { link: '/settings', title: 'Settings', icon: <HiCog6Tooth /> },
    { link: '/sign-in', title: 'Sign in', icon: <FaSignInAlt /> },
    false && { link: '/sign-out', title: 'Sign-out', icon: <FaSignOutAlt /> },
]


export default navItems