import Image from "next/image"
import * as runtime from "react/jsx-runtime"

import { DocsItemLink } from "./docs-item/link"
import { PostAtention } from "./post-atention"
const useMDXComponent = (code: string) => {
  // eslint-disable-next-line no-new-func
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

const components = {
  Image,
  PostAtention,
  DocsItemLink,
}

interface MdxProps {
  code: string
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}
