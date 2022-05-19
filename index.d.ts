type TSVGProps = {
	size?: string | number;
} & React.SVGProps<SVGSVGElement>;

type Ttag = string;

type TFileDefaulInfo = {
	name: string;
	size: string;
	ext: string;
	img: string;
};

interface IDhubContract {
	address: { [key: number]: string };
	abi: any;
}

type Web3Error = {
	originalError: {
		code: string;
		data: string;
		message: string;
	};
};
