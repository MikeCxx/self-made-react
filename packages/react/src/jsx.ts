import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols'
import type {
  Type,
  Key,
  Props,
  ReactElement,
  Ref,
  ElementType
} from 'shared/ReactTypes'

const ReactElement = (
  type: Type,
  key: Key,
  ref: Ref,
  props: Props
): ReactElement => {
  const element = {
    $$typeof: REACT_ELEMENT_TYPE,
    key,
    ref,
    props,
    type,
    __sign: 'SUMING'
  }
  return element
}

export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
  let key: Key = null
  let ref: Ref = null
  const props: Props = {}

  for (const prop in config) {
    const val = config[prop]
    if (prop === 'key') {
      if (val !== undefined) {
        key = '' + val
      }
      continue
    }

    if (prop === 'ref') {
      if (val !== undefined) {
        ref = val
      }
      continue
    }

    if (Object.hasOwnProperty.call(config, prop)) {
      props[prop] = val
    }
  }

  const len = maybeChildren.length
  if (len) {
    if (len === 1) {
      props.children === maybeChildren[0]
    } else {
      props.children = maybeChildren
    }
  }

  return ReactElement(type, key, ref, props)
}
