const cardEl = document.querySelector('.card');

/* Array findLastIndex() */
const dummyImageLoadings = ['lazy', 'eager'];
const imageLoading =
	dummyImageLoadings[dummyImageLoadings.findLastIndex((x) => x !== 'lazy')];

const cardImageEl = cardEl.querySelector('.card__image img');
cardImageEl.loading = imageLoading;

/* Array findLast() */
const marks = ['see', 'sight', 'insights'];
const pickedMark = marks.findLast((x) => x.length > 5);

const cardTitleSpanEl = cardEl.querySelector('.card__title mark');
cardTitleSpanEl.textContent = pickedMark;

/* Array toReversed() */
const dummyDescription = [
	'and overall efficiency.',
	'customer experience,',
	'Discover the benefits of data analytics and make better decisions regarding revenue,',
];
const description = dummyDescription.toReversed().join(' ');

const cardDescriptionEl = cardEl.querySelector('.card__desc');
cardDescriptionEl.textContent = description;

/* Array toSorted() */
const dummyStatusLabels = ['Queries', 'Templates', 'Companies'];
const statusLabels = dummyStatusLabels.toSorted();

const cardStatusItemEls = cardEl.querySelectorAll('.card__stats-list-item');
cardStatusItemEls[0].querySelector('.label').textContent = statusLabels[0];
cardStatusItemEls[1].querySelector('.label').textContent = statusLabels[2];
cardStatusItemEls[2].querySelector('.label').textContent = statusLabels[1];

/* Array toSpliced() */
const dummyStatusAmounts = ['10K+', '404', '314', '12M+'];
const statusAmounts = dummyStatusAmounts.toSpliced(1, 1);

cardStatusItemEls[0].querySelector('.num').textContent = statusAmounts[0];
cardStatusItemEls[1].querySelector('.num').textContent = statusAmounts[1];
cardStatusItemEls[2].querySelector('.num').textContent = statusAmounts[2];
