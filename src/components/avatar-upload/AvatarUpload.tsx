import React, { ChangeEvent, useState } from 'react';

import avatarUpload from './assets/avatar.png';

interface AvatarUploadProps {
    onUpload: (file: File) => void;
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({ onUpload }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;

        if (fileList && fileList.length > 0) {
            const file = fileList[0];
            setSelectedFile(file);
            onUpload(file);
        }
    };

    return (
        <div>
            <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
                <img src={avatarUpload} alt="Avatar upload"/>
                <span style={{ marginLeft: '8px' }}>Upload Avatar</span>
            </label>
            <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
            {selectedFile && (
                <div>
                    <p>Selected File: {selectedFile.name}</p>
                    {/* You can add an image preview here if needed */}
                </div>
            )}
        </div>
    );
};

export default AvatarUpload;
