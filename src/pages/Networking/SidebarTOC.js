import React, { useEffect, useState } from 'react';

function SidebarTOC() {
    const [title, setTitle] = useState([]);
    const [subTitle, setSubTitle] = useState([]);

    useEffect(() => {
        const h3 = document.querySelectorAll('h3')
        // console.log(h3)
        const h5 = document.querySelectorAll('h5')
    
        const newTitles = Array.from(h3).map((ele, index) => {
            return {
                id: index + 1,
                content: ele.innerHTML
            }
        });
        setTitle(newTitles);

        const pnode = Array.from(h5).map(t => console.log(t.parentElement))
        // console.log(pnode)
        
        const newSubTitles = Array.from(h5).map((ele, index) => {
            return {
                id: index + 1,
                content: ele.innerHTML
            }
        });
        setSubTitle(newSubTitles);

    },[])

    return (  
        <div className='bg-white p-3'>
            <h5 className='toc-title fw-bold'>Table of Contents</h5>
            <nav>
                <ol>
                    {title.map(t => (
                        <a href={`#${t.id}`} key={t.id} className='text-decoration-none'>
                            <li className='mb-2'>{t.content}</li>
                        </a>
                    ))}
                </ol>
            </nav>
        </div>
    );
}

export default SidebarTOC;