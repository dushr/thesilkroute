import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepOrange500, indigo500 } from 'material-ui/styles/colors';

export default getMuiTheme(Object.assign({}, lightBaseTheme, {
  palette: {
    accent1Color: deepOrange500,
    primary1Color: indigo500
  }
}));
