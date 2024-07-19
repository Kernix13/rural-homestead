const land = `liens,protective covenants,General Warranty Deed,perc test,environmental tests,geology and soils report,rezoned,due diligence,vacant lot,zoning,building code,building permits,(permit) variances,town clerk website,local board of health,septic system,soil quality,height of ground water,lot lines,permit for an engineered septic system,zoning bylaws,Subdivisions,detention ponds,common rights of way,protected water resources,land ownership history,foreclosure,back taxes,closing escrow,title insurance preliminary report,restrictions,environmental or historical designations,mineral commodities,comparables (Comps),sales comparison approach,flood zone,boundaries,timber rights,served by a sewer,sewer access,municipal water,alternative wastewater treatment system,general contractor,alternative septic system,connection fee,sewer service provider,sewer usage fee / sewer connection fee,septic permit,site evaluation,topography assessment,soil test,site evaluator,conventional (gravity-fed) septic system,Septic regulations,property lines,real estate attorney,purchase contract,public water source,community well,water lines,main water line,underground water,licensed well driller,water rights,well water,Water Availability,Land use,Residential land,Vacant land,unimproved land,undeveloped land,or raw land,vacant lots,comparables,weighted analysis,road access,building codes,flood maps,land-use restrictions,parcel,Property taxes,Property survey,property boundaries,offer,contingencies,septic system permit,land surveys,zoning regulations,sample purchase agreements,seller's agent,on market,off market,Accredited Land Consultant (ALC) designation,due diligence steps,Geographic Information Systems (GIS) map,County Assessor's Office,county tax deed auctions,off-grid water system,fiber-optic internet cable,Road Access,Bid Offer form,real estate lawyer,covenants conditions and restrictions (CC&Rs),zoning designation,Zoning and Planning Office,percolation test,rate of water drainage,Clear boundaries,dedicated land brokers,closing costs,counteroffer,specific use,deed restrictions,flood designation,Flat parcels,environmentally sensitive areas,geotechnical investigation,accredited land consultant: Zillow's Find an Agent tool,setbacks,homeowners insurance,liability insurance,land purchase agreement,real estate agent or broker,written offer,land contract,under contract,under review,Earnest Money,access points,professional survey,cell phone access,easement,mineral rights,PVA office,the Delinquent Tax Office,the Deed Room,the Sheriff's ofice,closing,Title search,unsurveyed land,land-locked land,ground strata,county assessors' office and appraisal district,Central Appraisal district,property tax assessor,property lookup,Multiple Listing Service,abandoned properties,National Association of Realtors,Foreclosures Inspections & Evictions,land ownership records,skip-tracing,real property,title insurance,short sale,title abstract,title opinion,Drainage Requirements,Stormwater,Geotechnical,Construction Access,Water District & Connection,Electric & Connection,Flood Zone and Impact,Environmental Requirements,ADU Requirements,Solar Rating,expired listings,online tax portals,public records requests |`;

const shed = `floor space,high roof / low roof,concrete slab foundations,custom-built shed,fire resistant,Land Clearing,grade the land,Site Clearing,Insulation,Electrical Installation,Wood vs vinyl shed,raw materials,fixtures,structures,Plumbing,sheetrock / drywall,access road,Fencing,prefab shed,heating & cooling,septic tank,wall vents,ridge vents,Smoke alarms,security alarms/system,Foundation design,accessory dwelling unit,frost proof hydrant,water,proof of residence,shed pad graded,composting toilet or porta potty service or septic system,weather resistant doors,Siding,venting,windows,soffit vents,gable vents,composting toilet,insulation,residential building permit,Window placement,door placement,internal wall placement,concrete footings,poured piers,hire a crane,weatherproof,weather stripping,shiplap,galvanized metal panels,wainscoting,Gutters and awnings,Skirting,vinyl skirting,concrete or stucco skirting,brick and cinder block skirting,fiber cement skirting and lattice skirting,front steps,wall studs,Planning and/or Zoning department,department timelines,shed production queue,2x4 construction,insulated doors and windows,!pressboard,floor joists,egress windows,drywall corners,engineered drawings,Shed delivery,Transom Dormers,House wrap,Tar Paper,foundation wall,tie downs,underpinning,local zoning laws,Structural plans,zoning regulations,building/construction codes,Planning & Zoning department,wind load design,Building permit,Mechanical permit,Electrical permit,Plumbing permit,Building Code Compliance,gravel or concrete foundation,cover-coat,deck oil,deck oil based paint,spray foam,code jurisdictions,Level Pad And Grade,Utility Connections,Shed Framing,electrical lines,water lines,internet connections,soffit/facia,silicone caulk,sheathing,closed cell spray foam,high R value,foamboard,plywood,interior plans,interior materials`;

const landOutput = document.getElementById('land-terms')
const shedOutput = document.getElementById('shed-terms')

let termsArr = [];
function formatTerms(str) {
  const splitTerms = str.split(",");

  const trimTerms = splitTerms.forEach(term => {
    term.trim();
    termsArr.push(term);
  });

  return termsArr.sort();
}


formatTerms(shed);

termsArr.forEach(item => {
  console.log(item);
  shedOutput.innerHTML += `${item} <br>` 
})

// termsArr.forEach(item => {
//   console.log(item);
//   landOutput.innerHTML += `${item} <br>` 
// })