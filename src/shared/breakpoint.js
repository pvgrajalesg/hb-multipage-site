export default class Breakpoint {
  static dataBreakpoint () {
    return ({
      'breakpoint': {
        'small': {
          'maxWidth': '639px',
          'minWidth': '320px'
        },
        'medium': {
          'maxWidth': '1023px',
          'minWidth': '640px'
        },
        'large': {
          'minWidth': '1024px'
        }
      }
    })
  }
}
