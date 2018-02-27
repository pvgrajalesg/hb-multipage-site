export default class Breakpoint {
  static dataBreakpoint () {
    return ({
      'breakpoint': {
        'small': {
          'maxWidth': '639',
          'minWidth': '320'
        },
        'medium': {
          'maxWidth': '1023',
          'minWidth': '640'
        },
        'large': {
          'minWidth': '1024'
        }
      }
    })
  }
}
