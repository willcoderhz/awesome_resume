import React from 'react';

type SelfIntroductionProps = {
    handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const SelfIntroduction: React.FC<SelfIntroductionProps> = ({ handleInputChange }) => {
    return (
        <div className="bg-gray-100 p-6  shadow-md ml-0 w-2/5 my-0">
            <h3 className="text-xl font-semibold mb-4 ml-1">自我介绍</h3>
            <textarea 
                name="introduction" 
                placeholder="简短地描述自己" 
                onChange={handleInputChange}
                className='border rounded p-2 w-full h-32 mx-1'
            />
        </div>
    );
}

export default SelfIntroduction;
