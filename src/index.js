import {createBrowserHistory} from 'history';

const history = createBrowserHistory();
const app = document.getElementById('app');

const navigation = document.getElementById('navigation')
const altNavigation = document.getElementById('alt-navigation')

navigation.addEventListener('click', (event) => {
  const id = event.target.id;
  history.push(`/${id}`)
  return false;
})

altNavigation.addEventListener('click', event => {
  const id = event.target.id;
  const val = event.target.value;
  history.push(`/${val}`)
  setTimeout(() => history.replace(`/${id}`), 100)
})


const routes = [{
  name: 'One',
  path: '/one',
  render: () => {
    return 'Page One';
  }
},{
  name: 'Two',
  path: '/two',
  render: () => {
    return 'Page Two';
  }
},{
  name: 'Three',
  path: '/three',
  render: () => {
    return 'Page Three';
  }
},{
  name: 'Alt One',
  path: '/alt-one',
  render: () => {
    return 'Page Alt One';
  }
},{
  name: 'Alt Two',
  path: '/alt-two',
  render: () => {
    return 'Page Alt Two';
  }
},{
  name: 'Alt Three',
  path: '/alt-three',
  render: () => {
    return 'Page Alt Three';
  }
}]

const routeChanged = (location) => {
  console.log(location.pathname)
  console.log(history.length);
}


history.listen((location, action) => {

  routeChanged(location)
  let match = null;
  routes.forEach(route => {
    if(route.path === location.pathname) {
      match = route;
    }
  })
  if(match) {
    app.innerHTML = match.render();
  }
})



window.addEventListener('popstate', (event) => {
    console.log('popstate triggered')
})