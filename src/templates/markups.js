export const searchResultTemplate = result => {
  const lastIndex = result.stations.length - 1;
  const pathResultTemplate = result.stations.map((station, index) => pathStationTemplate(station.name,
    index,
    lastIndex)).join("");
  return `<div class="px-2 py-4 border-b">
      <div class="w-full flex mb-3">
        <div class="inline-block w-1/2 border-r text-center">
          <div class="text-gray-600 text-sm">소요시간</div>
          <div>${result.duration}분</div>
        </div>
        <div class="inline-block w-1/2 text-center">
          <div class="text-gray-600 text-sm">거리</div>
          <div>${result.distance}km</div>
        </div>
      </div>
    </div>
    <div class="relative pt-3 pb-10">
      <div class="px-2 py-1 w-full flex">
        <div class="w-10/12 inline-block">
          ${pathResultTemplate}
        </div>
      </div>
    </div>`;
};

export const pathStationTemplate = (name, index, lastIndex) => {
  return `
  ${
    index === 0 || index === lastIndex
      ? `${index === lastIndex ? `<span class="mdi mdi-arrow-right-bold text-gray-500"/>` : ``}
        <span class="font-bold">${name}</span>`
      : `<span class="mdi mdi-arrow-right-bold text-gray-500"/>
         <span class="text-gray-600">${name}</span>
        `
  }`;
};
