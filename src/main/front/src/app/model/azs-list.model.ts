export class AzsList {
    public code: number;
    public description: string;
    public status: {
        "code": number,
        "message": string
    };
    public data: [
        {   "ID": number,
            "ContractName": string,
            "ContractNumber": string,
            "RegionCode": number,
            "AddInfo03": string,
            "TrCountry": string,
            "FLTCards": string,
            "LTYCards": string,
            "GPBCards": string,
            "Region": "string"}
        ];
}