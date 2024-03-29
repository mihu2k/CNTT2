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

    '& .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-6.MuiGrid-grid-lg-4':
      {
        backgroundColor: '#f7f7f7',
        padding: '20px',
        [theme.breakpoints.down('sm')]: {
          justifyContent: 'center',
          backgroundColor: '#fff',
        },
      },
    '& .MuiGrid-root.MuiGrid-container.MuiGrid-spacing-md-8.MuiGrid-spacing-lg-2':
      {
        backgroundColor: '#f7f7f7',
      },
    '& .MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2': {
      [theme.breakpoints.only('md')]: {
        margin: '32px 32px 46px 0',
      },
    },
    '& .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-0.MuiGrid-grid-sm-3.MuiGrid-grid-md-3': {
      [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
        flex: '1',
        flexDirection: 'row',
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

    [theme.breakpoints.down('sm')]: {
      alignItems: 'baseline',
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
