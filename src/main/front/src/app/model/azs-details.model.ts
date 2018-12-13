export class AzsDetails {
    public status: {
        "code": number,
        "message": string
    };
    public data: {
        "SiebelID": string,
        "ITSCSecessionGPN": string,
        "ITSCGSBelongsTo": string,
        "GasStationNum": string,
        "Name": string,
        "ID": string,
        "ListOfTracks": [
            {}
            ],
        "Partner": string,
        "ListOfTerminals": [
            {
                "Terminal": [
                    {
                        "Status": string,
                        "ConnectionType": string,
                        "TerminalNumber": string,
                        "TerminalType": string,
                        "TerminalName": string,
                        "TerminalId": string
                    }
                    ]
            }
            ],
        "OwnType": string,
        "LocationType": string,
        "ListOfServices": [
            {
                "Service": [
                    {
                        "Value": string,
                        "SiebelID": string
                    }
                    ]
            }
            ],
        "Brand": string,
        "AddInfo03": string,
        "House": string,
        "OpenDate": string,
        "CloseDate": string,
        "Country": string,
        "Status": string,
        "Phone": string,
        "Fax": string,
        "Latitude": number,
        "Longitude": number,
        "FLTCards": string,
        "LTYCards": string,
        "GPBCards": string,
        "Region": string,
        "City": string,
        "Street": string,
        "Building": string,
        "ITSCKMRoad": string,
        "ITSCTTType": string,
        "ITSCRoadSide": string,
        "ITSCAZSTimeZone": string,
        "TradePointName": string
    }
}