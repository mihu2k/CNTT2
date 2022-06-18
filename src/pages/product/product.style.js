import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '80px',
    '& .MuiBreadcrumbs-root': {
      '& .MuiLink-root': {
        fontSize: '1.4rem',
      },
    },
  },
  wrapHeaderFilter: {
    paddingTop: '10px',
    marginBottom: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .MuiSelect-select': {
      padding: '14px',
    },
  },
  select: {
    fontSize: '1.4rem',
    fontFamily: "'SamsungOne', sans-serif",
    '& .MuiOutlinedInput-notchedOutline': {
      border: 0,
    },
    '& .MuiSelect-icon': {
      fontSize: '20px',
    },
  },
  selectItem: {
    fontSize: '1.4rem',
    fontFamily: "'SamsungOne', sans-serif",
  },
  wrapAccordion: {
    '& .MuiAccordionSummary-root': {
      minHeight: '48px',
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
  },
}));
