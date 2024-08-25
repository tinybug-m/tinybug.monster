import React, { lazy, Suspense, useState } from 'react'
import Typography from '@mui/material/Typography'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { Box } from '@mui/material';

function Contact() {
  const [contactList, setContactList] = useState([
    {
      icon: 'phone',
      text: '+98 996 640 5896'
    },
    {
      icon: 'mail',
      text: 'Arshiarnjbar@gmail.com'
    },
    {
      icon: 'site',
      text: 'tinybug.monster'
    }
  ])
  const getIcon = (icon) => {
    switch (icon) {
      case "phone":
        return lazy(() => import('@mui/icons-material/LocalPhoneOutlined'));
      case "mail":
        return lazy(() => import('@mui/icons-material/EmailOutlined'));
      case "site":
        return lazy(() => import('@mui/icons-material/LanguageOutlined'));
      default:
        return 'SmartphoneIcon'
    }
  }

  return (

    <div>


      <Typography variant="h5" mb={4} color="initial">Contact</Typography>
      {contactList.map(contact => {
        const Icon = getIcon(contact.icon);
        return (
          <Box sx={{display:'flex',gap:1,mb:2}}>
            <Suspense fallback={<div>Loading...</div>}>
              <Icon />
            </Suspense>
            <Typography variant="body1" display={'inline-block'} color="initial">{contact.text}</Typography>
          </Box>
        );
      })}
    </div>
  )
}

export default Contact
