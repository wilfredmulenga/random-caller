import { PURE_WHITE, BASE_GREEN, ERROR_RED, DARK_GREY, BLACK, ORANGE, TOMATO_RED } from '../common/appColors'

export const main = {
  justifyContent: 'center',
  backgroundColor: PURE_WHITE,
  height: '100%',
  paddingHorizontal: 20,
  paddingTop: 20,
  paddingBottom: 40
}

export const headerWrapper = {
  flexDirection: 'row',
  justifyContent: 'center'
}

export const header = {
  fontSize: 20
}

export const block = {
  height: 60,
  borderRadius: 7,
  backgroundColor: BASE_GREEN,
  marginBottom: 20,
  justifyContent: 'center',
  alignItems: 'center',
  color: PURE_WHITE
}

export const modal = {
  padding: 20,
  borderRadius: 7,
  backgroundColor: PURE_WHITE,
  justifyContent: 'center',
  alignItems: 'center'
}

export const errorMessage = {
  color: ERROR_RED,
  paddingBottom: 15,
  marginTop: 15,
  textAlign: 'center'
}

export const prompt = {
  color: DARK_GREY
}

export const cardLayout = {
  borderWidth: 1.25,
  borderColor: DARK_GREY,
  paddingHorizontal: 12,
  paddingVertical: 20,
  borderRadius: 10,
  backgroundColor: PURE_WHITE,
  elevation: 10,
  shadowOffset: { width: 0, height: 4 },
  shadowColor: BLACK,
  shadowRadius: 5,
  shadowOpacity: 0.36
}

export const radioButton = {
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 30,
    marginLeft: 30
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: DARK_GREY,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: BASE_GREEN
  },
  flexDirectionRow: {
    flexDirection: 'row'
  },
  marginTop: {
    marginTop: 18
  },
  fontSize: {
    fontSize: 14
  }
}

export const getStatusColor = (status) => {
  const baseStyles = {
    flexDirection: 'row',
    backgroundColor: BLACK,
    justifyContent: 'center',
    paddingHorizontal: 7,
    borderRadius: 5
  }
  switch (status) {
    case 'Under review':
      return { ...baseStyles, backgroundColor: ORANGE }
    case 'Approved':
    case 'Settled':
      return { ...baseStyles, backgroundColor: BASE_GREEN }
    case 'Rejected':
      return { ...baseStyles, backgroundColor: TOMATO_RED }
    default:
      return baseStyles
  }
}
