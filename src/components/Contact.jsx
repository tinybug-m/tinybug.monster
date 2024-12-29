import React, { lazy, Suspense, useState } from 'react'
import Typography from '@mui/material/Typography'

import { Box } from '@mui/material';

function Contact() {
  const [contactList] = useState([
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
      {contactList.map((contact,index) => {
        const Icon = getIcon(contact.icon);
        return (
          <Box key={`contact-${index}`} sx={{display:'flex',gap:1,mb:2}}>
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
