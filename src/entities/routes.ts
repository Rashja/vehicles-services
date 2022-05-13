export enum UserRoutes {
  USER = 'user',
}

export enum AuthRoutes {
  LOGIN = 'login',
}

export enum VehicleRoutes {
  VEHICLE = 'vehicle',
  NUMBERPLATE = '/findVehicleByNumberplate/:numberplate',
  ASSIGN_ALTERNATIVE_DRIVERS = '/assignAlternativeDrivers',
  VEHICLE_ALTERNATIVE_DRIVERS='/vehicleAlternativeDrivers/:numberplate'
}

export enum AlternativeDriverRoutes {
  ALTERNATIVE_DRIVER = 'alternativeDriver',
  LICENSE='/:license'
}

export enum BranchRoutes {
  BRANCH='branch'
}

export enum ServiceRoutes {
  SERVICE='SERVICE'
}