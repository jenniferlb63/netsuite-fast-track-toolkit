import { Sublist, SublistFieldType, SublistLine } from '../DataAccess/Sublist'

import * as record from '../__mocks__/N/record'

describe('Sublists', function () {

   class FakeSublistLine extends SublistLine {}

   class SublistWithTextField extends SublistLine {
      @SublistFieldType.freeformtext
      fooText: string

      @SublistFieldType.checkbox
      anotherfield: boolean
   }

   test('read value from sublist property', () => {
      const fakeRec = record.create({ type: 'fake' })
      record.getSublistValue.mockReturnValue('some text')
      record.getLineCount.mockImplementation(() => 1)
      class MyLine extends FakeSublistLine {
         @SublistFieldType.freeformtext
         myfield:string
      }

      const sut = new Sublist(MyLine, fakeRec, 'fakesublist')
      expect(sut[0].myfield).toEqual('some text')
   })

   test('remove a lines in the middle', () => {

      const fakeRec = record.create({ type: 'fake' })
      let lineCount = 10
      record.getLineCount.mockImplementation(() => lineCount)
      record.removeLine.mockImplementation(() => lineCount--)

      const sut = new Sublist(FakeSublistLine, fakeRec, 'fakesublist')

      // initial linecount should be  10 from test setup
      expect(sut.length).toBe(10)

      sut.removeLine(3, true)

      expect(sut.length).toBe(9)
      expect(record.removeLine.mock.calls.length).toBe(1)
      expect(record.removeLine).lastCalledWith({ sublistId: 'fakesublist', ignoreRecalc: true, line: 3 })
      // uncomment to view calls to removeLine() console.log(record.removeLine.mock.calls)
   })

   test('insert a line in the middle', () => {

      const fakeRec = record.create({ type: 'fake' })
      let lineCount = 10
      record.getLineCount.mockImplementation(() => lineCount)
      record.insertLine.mockImplementation(()=> lineCount++)
      const sut = new Sublist(FakeSublistLine, fakeRec, 'fakesublist')

      // initial linecount should be  10 from test setup
      expect(sut.length).toBe(10)

      const newline = sut.addLine(true, 4)

      expect(newline._line).toEqual(4)
      expect(sut.length).toBe(11)
      expect(record.insertLine).toBeCalled()
      // uncomment to view calls to removeLine() console.log(record.removeLine.mock.calls)
   })
   test('insert a line', () => {

      const fakeRec = record.create({ type: 'fake' })
      let lineCount = 10
      record.getLineCount.mockImplementation(() => lineCount)
      record.insertLine.mockImplementation(()=> lineCount++)
      const sut = new Sublist(FakeSublistLine, fakeRec, 'fakesublist')

      // initial linecount should be  10 from test setup
      expect(sut.length).toBe(10)

      // inserts line at the end by default
      const newline = sut.addLine()

      expect(newline).toHaveProperty("_line", 10)
      expect(sut.length).toBe(11)
      expect(record.insertLine).toBeCalled()

      //console.log('keys', Object.keys(sut))
      // uncomment to view calls to removeLine() console.log(record.removeLine.mock.calls)
   })

   test('remove all lines on an already empty sublist', () => {
      const fakeRec = record.create({ type: 'fake' })

      let lineCount = 0 // start with an empty sublist
      record.getLineCount.mockImplementation(() => lineCount)
      record.removeLine.mockImplementation(() => lineCount--)

      const sut = new Sublist(FakeSublistLine, fakeRec, 'fakesublist')

      sut.removeAllLines()

      expect(sut.length).toBe(0)
      expect(record.removeLine).not.toBeCalled()
      // uncomment to view calls to native removeLine() console.log(record.removeLine.mock.calls)
   }),

      test('getText() on field', () => {
         const fakeRec = record.create({ type: 'fake' })
         record.getSublistText.mockReturnValue('some text')
         record.getSublistValue.mockImplementation(() => { throw new Error() })

         const sut = new SublistWithTextField('fakesublist', fakeRec, 0)
         sut.fooText

         expect(record.getSublistText).toBeCalledTimes(1)
         expect(record.getValue).not.toHaveBeenCalled()

      }),

      test('getText() on field - dynamic record', () => {
         const fakeRec = record.create({ type: 'fake' })
         fakeRec.isDynamic = true

         record.getSublistText.mockReturnValue('some text')
         record.getSublistValue.mockImplementation(() => { throw new Error() })

         const sut = new SublistWithTextField('fakesublist', fakeRec, 0)
         sut.fooText

         expect(record.getCurrentSublistText).toBeCalledTimes(1)
         expect(record.getSublistText).not.toHaveBeenCalled()

      }),

      test('setText() on field', () => {
         const fakeRec = record.create({ type: 'fake' })
         record.getSublistText.mockReturnValue('some text')
         record.getSublistValue.mockImplementation(() => { throw new Error() })

         const sut = new SublistWithTextField('fakesublist', fakeRec, 0)
         sut.fooText = 'hello world'

         expect(record.setSublistText).toBeCalledWith({
               'fieldId': 'foo',
               'line': 0,
               'sublistId': 'fakesublist',
               'text': 'hello world'
            }
         )
         expect(record.getValue).not.toHaveBeenCalled()

      })

      test('setText() on field - dynamic mode', () => {
         const fakeRec = record.create({ type: 'fake', isDynamic:true })
         record.getSublistText.mockReturnValue('some text')
         record.getSublistValue.mockImplementation(() => { throw new Error() })

         const sut = new SublistWithTextField('fakesublist', fakeRec, 0)
         sut.fooText = 'hello world'
         expect(record.setCurrentSublistText).toBeCalledWith({
               'fieldId': 'foo',
               'sublistId': 'fakesublist',
               'text': 'hello world'
            }
         )
      })
})
