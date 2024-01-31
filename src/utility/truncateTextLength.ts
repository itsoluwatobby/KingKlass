/**
 * @desc reduceTextLength: function to truncate content length
 * @param content text to truncate
 * @param maxLength desired length to truncate to (default is 20 characters)
 * @param option ("letter" | "word") default letter
 * @returns truncated content
 */
export const reduceTextLength = (content: string, maxLength=20, option:('letter'|'word')='letter') => {
  let responseOutput = '';
  if(option === 'letter'){
    responseOutput = content?.length > maxLength ? content?.substring(0, maxLength) +'...' : content
  }
  else if(option === 'word'){
    responseOutput = content?.split(' ')?.length > maxLength ? content?.substring(0, maxLength * 4) +'...' : content
  }
  return responseOutput
}

/**
 * @desc checkCount: function that checks the length of a content
 * @param content
 * @Return returns content length
 */
export const checkCount = <T>(content: T[] | T): string => {
  let count = ''; 
  const length = Array.isArray(content) ? content?.length : content as number;
  if(length <= 999){
    if(Array.isArray(content)){
      if(length == 1 && content[0] == '') count = '0'
      else count = length.toString()
    }
    else count = length.toString()
  }
  else if(length > 999 && length <= 999_999)
    count = ((length / 1000).toFixed(1)).toString() + 'K'
  else if(length > 999_999 && length <= 999_999_999)
    count = ((length / 1000_000).toFixed(1)).toString() + 'M'
  else if(length > 999_999_999)
    count = ((length / 1000_000_000).toFixed(1)).toString() + 'B'
  return count
}