import requests
r = requests.get('https://www.norauto.fr/INTERSHOP/web/WFS/NI-NOFR-Site/fr_FR/-/EUR/ViewSearchVehicule-SearchSpecificVehiclesVehicleSearch3S?TyreSelectorSeason=&TyreSelectorByCar=true&AddToAccount=&NumImmatriculation=DV-412-HL')

print(r.text)
