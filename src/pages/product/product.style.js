import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '80px',
    '& .MuiBreadcrumbs-root': {
      '& .MuiLink-root': {
        fontSize: '1.4rem',
      },
    },

    '& .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-6.MuiGrid-grid-lg-4.css-3cz33d-MuiGrid-root':
      {
        backgroundColor: '#f7f7f7',
        padding: '20px',
        [theme.breakpoints.down('sm')]: {
          justifyContent: 'center',
          backgroundColor: '#fff',
        },
      },
  },
  wrapHeaderFilter: {
    paddingTop: '10px',
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .MuiSelect-select': {
      padding: '14px',
    },

    [theme.breakpoints.down('sm')]: {
      alignItems: 'baseline',
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
    boxShadow: 'unset',
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

    '& .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiAccordion-root.MuiAccordion-rounded.Mui-expanded.MuiAccordion-gutters':
      {
        boxShadow: 'none',
      },
  },
}));
