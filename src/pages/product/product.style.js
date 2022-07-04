import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '80px',
    '& .MuiBreadcrumbs-root': {
      '& .MuiLink-root': {
        fontSize: '1.6rem',
      },
      '& .MuiTypography-root ': {
        fontSize: '1.6rem',
      },
    },
  },
  wrapHeaderFilter: {
    paddingTop: '10px',
    paddingBottom: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .MuiSelect-select': {
      padding: '14px',
    },
  },
  select: {
    fontSize: '1.6rem',
    fontFamily: "'SamsungOne', sans-serif",
    '& .MuiOutlinedInput-notchedOutline': {
      border: 0,
    },
    '& .MuiSelect-icon': {
      fontSize: '20px',
    },
  },
  selectItem: {
    fontSize: '1.6rem',
    fontFamily: "'SamsungOne', sans-serif",
  },
  wrapAccordion: {
    boxShadow: 'unset',
    '& .MuiAccordionSummary-root': {
      minHeight: '48px',
      borderBottom: '1px solid #f1f1f1',
      '& .MuiAccordionSummary-content': {
        margin: '10px 0',
      },
    },
    '& .MuiListItemIcon-root': {
      minWidth: '40px',
      '& .MuiCheckbox-root': {
        '& .MuiSvgIcon-root': {
          fontSize: '20px',
        },
      },
    },
    '& .MuiAccordion-root.Mui-expanded': {
      margin: '0',
    },
    '& .MuiListItemButton-root': {
      paddingTop: '2px',
      paddingBottom: '2px',
    },
    '& .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiAccordion-root.MuiAccordion-rounded.MuiAccordion-gutters':
      {
        boxShadow: 'none',
      },
  },
}));
