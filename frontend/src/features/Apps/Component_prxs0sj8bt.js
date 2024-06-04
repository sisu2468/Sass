
        import React from 'react';

        const Component_prxs0sj8bt = ({ title, description, formlabel, formfield, SetForm, myform, setClear, handleSubmit, bkcolor, textcolor, buttoncolor, position }) => (
            <div className='px-20 h-full' style={{ backgroundColor: bkcolor, color: textcolor }}>
                <h1 style={{ color: textcolor}} className='text-center mb-5 pt-8 text-4xl font-bold'>{title}</h1>
                <h2 style={{color: textcolor}} className='text-2xl mb-5'>{description}</h2>
                <h3 style={{color: textcolor}} className='text-xl mb-5'>{formlabel}</h3>
                <textarea className='mb-4 w-full rounded-lg' rows={4} placeholder={formfield} maxLength={1000} onChange={SetForm} value={myform}/>
                <div wrap className='flex item-center justify-center'>
                    <button className='mr-10 rounded-md w-20 font-bold text-white' style={{ backgroundColor: buttoncolor }} onClick={setClear}>Clear<i data-lucide="paintbrush"></i></button>
                    <button className='rounded-md h-10 w-20 font-bold text-white' style={{ backgroundColor: buttoncolor }} onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        );

        export default Component_prxs0sj8bt;
    