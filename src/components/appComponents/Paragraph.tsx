

type ParagraphProps = {
  content: string | JSX.Element;
}
export default function Paragraph({ content }: ParagraphProps) {
  
  return (
    <div className="text-[13px] tracking-wider leading-6 text-pretty whitespace-pre-wrap text-gray-800">
      {content}
    </div>
  )
}