import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import classNames from 'classnames';
import useStyles from './sidebar.styles';

export default function CustomListItem(props) {
  const classes = useStyles();

  const { item } = props;

  const subMenu = item.subRoutes ? item.subRoutes : [];

  const [openMenu, setOpenMenu] = React.useState(false);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  const caretClasses = classNames(classes.itemCaret);
  const parentListItemClasses = classNames({
    [classes.itemLinkActive]: Boolean(openMenu)
  });

  const menuName = `menu-${item.name.toLowerCase()}`;

  const subMenuList = subMenu.map((subItem, key) => {

    const subMenuName = `submenu-${subItem.name.toLowerCase().replace(' ', '-')}`;

    return (
      <Link href={subItem.path} key={key}>
        <a className={classes.listItemSub}>
          <ListItem button className={classes.nested}>
            <ListItemIcon className={classes.itemIcon}>
              <subItem.icon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  className={classes.listItemSub}
                  data-testid={subMenuName}
                >
                  {subItem.name}
                </Typography>
              }
            />
          </ListItem>
        </a>
      </Link>
    );
  });

  return (
    <>
      <ListItem
        button
        onClick={handleMenuClick}
        className={parentListItemClasses}
      >
        <ListItemIcon className={classes.itemIcon}>
          <item.icon />
        </ListItemIcon>

        <ListItemText
          primary={
            <Typography className={classes.listItem} data-testid={menuName}>
              {item.name}
            </Typography>
          }
        />
        {subMenu.length > 0 ? (
          openMenu ? (
            <ExpandLess className={caretClasses} />
          ) : (
            <ExpandMore className={caretClasses} />
          )
        ) : null}
      </ListItem>
      <Collapse in={openMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className={classes.listSub}>
          {subMenuList}
        </List>
      </Collapse>
    </>
  );
}

CustomListItem.propTypes = {
    item: PropTypes.object,
    role: PropTypes.string,
};
