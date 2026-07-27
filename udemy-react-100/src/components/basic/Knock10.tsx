import InputField from './InputField';

const Knock10 = () => {
    return (
        <>
            <InputField
                label="メールアドレス" 
                type="email" 
                placeholder="example@email.com"
                required 
            />
            <InputField
                label="テキスト" 
                type="text" 
                placeholder="プレースホルダー"
                required = {false}
            />
        </>
    )
};

export default Knock10;