import React from 'react'

function Table() {
    return (
        <div className='table'>
            <div className='table-data p-5  bg-gray-100'>
                <h1 className='text-2xl font-serif font-bold mb-2 underline '>Table</h1>
                <div className='overflow-auto rounded-lg shadow hidden md:block'>

                    <table className='w-full'>
                        <thead className='bg-gray-50 border-b-2 border-gray-200'>
                            <tr>
                                <th className='p-3 text-sm font-bold tracking-wide text-left'>id</th>
                                <th className='p-3 text-sm font-bold tracking-wide text-left'>Name</th>
                                <th className='p-3 text-sm font-bold tracking-wide text-left'>Email</th>
                                <th className='p-3 text-sm font-bold tracking-wide text-left'>City</th>
                                <th className='p-3 text-sm font-bold tracking-wide text-left'>Phone no:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-white'>
                                <td className='p-3 text-sm text-gray-700'>
                                    <a href='#' className='font-bold text-blue-500 hover:underline'>1</a>
                                </td>
                                <td className='p-3 text-sm text-gray-700'>nisha</td>
                                <td className='p-3 text-sm text-gray-700'><span>ganga04@gmail.com</span></td>
                                <td className='p-3 text-sm text-gray-700'>surat</td>
                                <td className='p-3 text-sm text-gray-700'>1234567890</td>
                            </tr>
                            <tr className='bg-gray-50'>
                                <td className='p-3 text-sm text-gray-700'>
                                    <a href='#' className='font-bold text-blue-500 hover:underline'>2</a>
                                </td>
                                <td className='p-3 text-sm text-gray-700'>ganga</td>
                                <td className='p-3 text-sm text-gray-700'><span>ganga04@gmail.com</span></td>
                                <td className='p-3 text-sm text-gray-700'>surat</td>
                                <td className='p-3 text-sm text-gray-700'>1234567890</td>
                            </tr>
                            <tr className='bg-white'>
                                <td className='p-3 text-sm text-gray-700'>
                                    <a href='#' className='font-bold text-blue-500 hover:underline'>3</a>
                                </td>
                                <td className='p-3 text-sm text-gray-700'>hiral</td>
                                <td className='p-3 text-sm text-gray-700'><span>ganga04@gmail.com</span></td>
                                <td className='p-3 text-sm text-gray-700'>surat</td>
                                <td className='p-3 text-sm text-gray-700'>1234567890</td>
                            </tr>
                            <tr className='bg-gray-50'>
                                <td className='p-3 text-sm text-gray-700'>
                                    <a href='#' className='font-bold text-blue-500 hover:underline'>4</a>
                                </td>
                                <td className='p-3 text-sm text-gray-700'>shreya</td>
                                <td className='p-3 text-sm text-gray-700'><span>ganga04@gmail.com</span></td>
                                <td className='p-3 text-sm text-gray-700'>surat</td>
                                <td className='p-3 text-sm text-gray-700'>1234567890</td>
                            </tr>
                            <tr className='bg-white'>
                                <td className='p-3 text-sm text-gray-700'>
                                    <a href='#' className='font-bold text-blue-500 hover:underline'>5</a>
                                </td>
                                <td className='p-3 text-sm text-gray-700'>tina</td>
                                <td className='w-32 p-3 text-sm text-gray-700'><span>ganga04@gmail.com</span></td>
                                <td className='p-3 text-sm text-gray-700'>surat</td>
                                <td className='p-3 text-sm text-gray-700'>1234567890</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='grid grid-col-1 sm:grid-cols-2 gap-4 md:hidden'>
                <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                    <div className='flex items-center space-x-2 text-sm'>
                        <div>
                            <a href='#' className='text-blue-700 font-bold hover:underline'>1</a>
                        </div>
                        <div className='p-3 text-sm text-gray-700'>
                        <span>nisha</span>
                        </div>
                        <div className='w-32 p-3 text-sm text-gray-700'>
                        <span>ganga04@gmail.com</span>
                        </div>
                    </div>
                        <div className='p-3 text-sm text-gray-700'>
                            <span>surat</span>
                        </div>
                        <div className='p-3 text-sm text-gray-700'>
                            <span>1234567890</span>
                        </div>
                </div>
               
                <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                    <div className='flex items-center space-x-2 text-sm'>
                        <div>
                            <a href='#' className='text-blue-700 font-bold hover:underline'>2</a>
                        </div>
                        <div className='p-3 text-sm text-gray-700'>
                        <span>ganga</span>
                        </div>
                        <div className='w-32 p-3 text-sm text-gray-700'>
                        <span>ganga04@gmail.com</span>
                        </div>
                    </div>
                        <div className='p-3 text-sm text-gray-700'>
                            <span>surat</span>
                        </div>
                        <div className='p-3 text-sm text-gray-700'>
                            <span>1234567890</span>
                        </div>
                </div>

                <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                    <div className='flex items-center space-x-2 text-sm'>
                        <div>
                            <a href='#' className='text-blue-700 font-bold hover:underline'>3</a>
                        </div>
                        <div className='p-3 text-sm text-gray-700'>
                        <span>hiral</span>
                        </div>
                        <div className='w-32 p-3 text-sm text-gray-700'>
                        <span>ganga04@gmail.com</span>
                        </div>
                    </div>
                        <div className='p-3 text-sm text-gray-700'>
                            <span>surat</span>
                        </div>
                        <div className='p-3 text-sm text-gray-700'>
                            <span>1234567890</span>
                        </div>
                </div>

                <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                    <div className='flex items-center space-x-2 text-sm'>
                        <div>
                            <a href='#' className='text-blue-700 font-bold hover:underline'>4</a>
                        </div>
                        <div className='p-3 text-sm text-gray-700'>
                        <span>shreya</span>
                        </div>
                        <div className='w-32 p-3 text-sm text-gray-700'>
                        <span>ganga04@gmail.com</span>
                        </div>
                    </div>
                        <div className='p-3 text-sm text-gray-700'>
                            <span>surat</span>
                        </div>
                        <div className='p-3 text-sm text-gray-700'>
                            <span>1234567890</span>
                        </div>
                </div>

                <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                    <div className='flex items-center space-x-2 text-sm'>
                        <div>
                            <a href='#' className='text-blue-700 font-bold hover:underline'>5</a>
                        </div>
                        <div className='p-3 text-sm text-gray-700'>
                        <span>tina</span>
                        </div>
                        <div className='w-32 p-3 text-sm text-gray-700'>
                        <span>ganga04@gmail.com</span>
                        </div>
                    </div>
                        <div className='p-3 text-sm text-gray-700'>
                            <span>surat</span>
                        </div>
                        <div className='p-3 text-sm text-gray-700'>
                            <span>1234567890</span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Table
